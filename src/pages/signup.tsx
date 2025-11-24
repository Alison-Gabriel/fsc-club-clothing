import Header from "../components/header";
import SignupForm from "../components/signup-form";

const SignupPage = () => {
  return (
    <>
      <Header />

      <main className="flex h-[calc(100vh-72px)] w-full items-center justify-center p-8">
        <section className="w-lg space-y-5">
          <header className="space-y-5 text-center">
            <h2 className="text-xl font-bold">Crie a sua conta</h2>
          </header>

          <div className="bg-brand-darken-blend h-px w-full" />

          <SignupForm />
        </section>
      </main>
    </>
  );
};

export default SignupPage;
