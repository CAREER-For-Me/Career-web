// 합격자 평균 역량 조회
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";
import { Avgspec } from "../types/avgspec-types";

interface AvgspecContextType {
  avgspec: Avgspec | null;
  setAvgspec: (avgspec: Avgspec | null) => void;
  loading: boolean;
  error: string | null;
}

// Context 생성
const AvgspecContext = createContext<AvgspecContextType | undefined>(undefined);

// Context Provider
export const AvgSpecProvider = ({ children }: { children: ReactNode }) => {
  const [avgspec, setAvgspec] = useState<Avgspec | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvgspec = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/avgspec`
        );

        if (response.data && response.data[0]) {
          setAvgspec(response.data[0]);
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
    fetchAvgspec();
  }, []);

  return (
    <AvgspecContext.Provider value={{ avgspec, setAvgspec, loading, error }}>
      {children}
    </AvgspecContext.Provider>
  );
};

// 사용자 정의 Hook: Context 값 사용
export const useAvgSpec = (): AvgspecContextType => {
  const context = useContext(AvgspecContext);
  if (!context) {
    throw new Error("AvgSpecSpec를 사용할 수 없습니다. Provider로 감싸셨나요?");
  }
  return context;
};
