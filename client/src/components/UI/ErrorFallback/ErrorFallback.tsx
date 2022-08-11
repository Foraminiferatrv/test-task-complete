interface Props {
  error: Error
}


function ErrorFallback({ error }: Props) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <p style={{ color: 'orange', fontWeight:'bold' }}>Try to reload the page later</p>
    </div>
  )
}

export { ErrorFallback }