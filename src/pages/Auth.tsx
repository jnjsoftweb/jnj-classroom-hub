import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const AuthPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        navigate("/");
      }
      if (event === 'SIGNED_OUT') {
        navigate("/auth");
      }
      if (event === 'PASSWORD_RECOVERY') {
        toast({
          title: "비밀번호 복구",
          description: "이메일을 확인해주세요.",
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-bold mb-8">JNJ Classroom</h2>
        <Auth
          supabaseClient={supabase}
          appearance={{ 
            theme: ThemeSupa,
            style: {
              button: { background: 'rgb(59 130 246)', color: 'white' },
              anchor: { color: 'rgb(59 130 246)' },
              message: { color: 'red' }
            },
          }}
          theme="light"
          providers={[]}
          redirectTo={window.location.origin}
          localization={{
            variables: {
              sign_in: {
                email_label: '이메일',
                password_label: '비밀번호',
                button_label: '로그인',
                loading_button_label: '로그인 중...',
                email_input_placeholder: '이메일을 입력하세요',
                password_input_placeholder: '비밀번호를 입력하세요',
                link_text: '계정이 이미 있으신가요? 로그인하기',
                password_error: '비밀번호가 올바르지 않습니다',
                email_error: '이메일이 올바르지 않습니다'
              },
              sign_up: {
                email_label: '이메일',
                password_label: '비밀번호',
                button_label: '회원가입',
                loading_button_label: '회원가입 중...',
                email_input_placeholder: '이메일을 입력하세요',
                password_input_placeholder: '비밀번호를 입력하세요',
                link_text: '계정이 없으신가요? 회원가입하기',
                password_error: '비밀번호가 올바르지 않습니다',
                email_error: '이메일이 올바르지 않습니다'
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default AuthPage;