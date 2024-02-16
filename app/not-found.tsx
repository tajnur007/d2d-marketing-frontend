import ErrorAndNotFound from '@/components/error-notfound';

export default function NotFound() {
  return (
    <ErrorAndNotFound
      pageName='404 error'
      title='Page not found'
      peragraph="Sorry, the page you are looking for doesn't exist. Here are some helpful links:"
    />
  );
}
