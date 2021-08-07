import Layout from 'components/Layout';
import { Box, Typography } from '@material-ui/core';
import TemplateContainer from 'components/TemplateContainer';

export default function Signup() {
  return (
    <Layout>
      <>
        <Box mb={4}>
          <Typography variant="h4">Sign up Page</Typography>
        </Box>
        <TemplateContainer preview="Sign up page preview" code="Sign up page code" />
      </>
    </Layout>
  );
}
