import { useRouter } from 'next/router';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';

type Props = {
  linkText: string;
  href: string;
};

export default function ActiveLink({ linkText, href }: Props) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    borderRight: `4px solid ${router.asPath === href ? 'red' : 'transparent'}`,
  };

  return (
    <ListItem button style={style}>
      <Link href={href}>
        <ListItemText primary={linkText} />
      </Link>
    </ListItem>
  );
}
