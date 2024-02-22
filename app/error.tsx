'use client';

import ErrorAndNotFound from '@/components/error-notfound';

export default function Error() {
  return (
    <ErrorAndNotFound
      pageName='500 error'
      title='Internal Server Error'
      peragraph='The server has been deserted for a while. Please be patient or try again later.'
    />
  );
}
