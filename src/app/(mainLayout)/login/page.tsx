import LoginForm from "@/components/shared/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-[calc(100vh-57px)] grid place-items-center">
      <div className="max-w-xl w-full p-4 lg:p-8 rounded-md bg-white shadow-lg border my-10">
        <h4 className="text-lg font-[400] mb-6">Hi, Welcome back!</h4>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
