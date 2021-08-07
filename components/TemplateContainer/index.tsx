import { Card, CardHeader, CardContent } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

export type Props = {
  content?: React.ReactNode;
};

export default function TemplateContainer({ content }: Props): JSX.Element {
  const theme = useTheme();
  return (
    <Card variant="outlined">
      <CardHeader
        title=""
        disableSpacing={true}
        style={{ borderBottom: `1px solid ${theme.palette.grey[600]}` }}
      ></CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}
