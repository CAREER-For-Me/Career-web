import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

interface UserSpecContextType {
  myspec: Myspec | null;
  setMyspec: (myspec: Myspec | null) => void;
  loading: boolean;
  error: string | null;
}

// Context 생성
const UserSpecContext = createContext<UserSpecContextType | undefined>(
  undefined
);

// Context Provider
export const UserSpecProvider = ({ children }: { children: ReactNode }) => {
  const [myspec, setMyspec] = useState<Myspec | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMyspec = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/myspec`
        );

        if (response.data && response.data[0]?.result) {
          setMyspec(response.data[0].result);
        } else {
          setError("데이터 형식이 예상과 다릅니다.");
        }
      } catch (err) {
        setError("API 호출 실패");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMyspec();
  }, []);

  return (
    <UserSpecContext.Provider value={{ myspec, setMyspec, loading, error }}>
      {children}
    </UserSpecContext.Provider>
  );
};

// 사용자 정의 Hook: Context 값 사용
export const useUserSpec = (): UserSpecContextType => {
  const context = useContext(UserSpecContext);
  if (!context) {
    throw new Error(
      "UserSpecContext를 사용할 수 없습니다. Provider로 감싸셨나요?"
    );
  }
  return context;
};
