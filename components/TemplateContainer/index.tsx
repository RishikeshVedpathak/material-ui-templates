import { Card, CardHeader, CardContent, Button, ButtonGroup } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CodeIcon from '@material-ui/icons/Code';
import useToggle from 'hooks/useToggle';

export type Props = {
  content?: React.ReactNode;
};

export default function TemplateContainer({ content }: Props): JSX.Element {
  const theme = useTheme();
  const [isPreviewMode, setIsPreviewMode] = useToggle(true);

  const handleModeChange = (enablePreview: boolean): void => {
    setIsPreviewMode(enablePreview);
  };

  return (
    <Card variant="outlined">
      <CardHeader
        title={
          <ButtonGroup variant="outlined" disableElevation size="small">
            <Button
              startIcon={<VisibilityIcon />}
              onClick={() => handleModeChange(true)}
              variant={isPreviewMode ? 'contained' : 'outlined'}
            >
              Preview
            </Button>
            <Button
              startIcon={<CodeIcon />}
              onClick={() => handleModeChange(false)}
              variant={isPreviewMode ? 'outlined' : 'contained'}
            >
              Code
            </Button>
          </ButtonGroup>
        }
        style={{ borderBottom: `1px solid ${theme.palette.grey[600]}` }}
      />
      <CardContent>{content}</CardContent>
    </Card>
  );
}
