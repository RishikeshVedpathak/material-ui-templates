import Layout from 'components/Layout';
import { Box, Typography } from '@material-ui/core';
import TemplateContainer from 'components/TemplateContainer';

export default function Login() {
  return (
    <Layout>
      <>
        <Box mb={4}>
          <Typography variant="h4">Login Page</Typography>
        </Box>
        <TemplateContainer preview="Login page preview" code="Login page code" />
      </>
    </Layout>
  );
}
