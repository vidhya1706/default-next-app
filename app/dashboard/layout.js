export default async function Layout({ children, login, signup }) {
  return (
    <div>
      <div className="mt-20">
        <div className="mb-10 mx-auto w-[400px]">{login}</div>
        <div className="mb-10 mx-auto w-[400px]">{signup}</div>
      </div>
      {children}
    </div>
  );
}
