import { ref, watch } from 'vue';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

//el diseño por defecto es oscuro; solo se usa `light` si el usuario lo eligió
const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : 'dark';
};

//estado compartido (singleton a nivel de módulo)
const theme = ref<Theme>(getInitialTheme());

const applyTheme = (value: Theme) => {
  //solo togglea la clase `.light`; sin clase = oscuro (default)
  document.documentElement.classList.toggle('light', value === 'light');
};

//se aplica de inmediato al importar y se persiste en cada cambio
applyTheme(theme.value);
watch(theme, (value) => {
  applyTheme(value);
  localStorage.setItem(STORAGE_KEY, value);
});

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
  };

  return { theme, toggleTheme };
}
