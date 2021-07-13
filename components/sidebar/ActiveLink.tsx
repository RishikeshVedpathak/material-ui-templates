import { useRouter } from 'next/router';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';
import { useTheme } from '@material-ui/core/styles';

type Props = {
  linkText: string;
  href: string;
};

export default function ActiveLink({ linkText, href }: Props) {
  const router = useRouter();
  const theme = useTheme();

  const style = {
    marginRight: 10,
    borderLeft: `4px solid ${router.asPath === href ? theme.palette.secondary.main : 'transparent'}`,
  };

  return (
    <Link href={href} passHref>
      <ListItem button style={style}>
        <ListItemText primary={linkText} />
      </ListItem>
    </Link>
  );
}
