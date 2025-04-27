export default function ErrorPage() {
  return (
    <div className="text-center mt-20 bg-white">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="mt-4">Sorry, an unexpected error has occurred.</p>
      <a href="/" className="mt-6 inline-block text-blue-500">
        Go back home
      </a>
    </div>
  );
}
