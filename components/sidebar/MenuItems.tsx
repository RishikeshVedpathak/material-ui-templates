import List from '@material-ui/core/List';
import ActiveLink from './ActiveLink';

export default function MenuItems() {
  return (
    <List component="nav" aria-label="nav menu">
      <ActiveLink href="/templates/login" linkText="Login Page" />
      <ActiveLink href="/templates/signup" linkText="Sign Up Page" />
    </List>
  );
}
