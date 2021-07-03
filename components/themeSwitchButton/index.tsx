import IconButton from '@material-ui/core/IconButton';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';

type Props = {
  isDarkMode: boolean;
  onModeChange: (isDarkMode: boolean) => void;
};

export default function themeSwitchButton({ isDarkMode, onModeChange }: Props) {
  return isDarkMode ? (
    <IconButton edge="end" color="inherit" aria-label="dark-mode" onClick={() => onModeChange(false)}>
      <BrightnessHighIcon />
    </IconButton>
  ) : (
    <IconButton edge="end" color="inherit" aria-label="light-mode" onClick={() => onModeChange(true)}>
      <Brightness4Icon />
    </IconButton>
  );
}
