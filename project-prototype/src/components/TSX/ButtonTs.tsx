interface Props {
  children: React.ReactNode; // 버튼 내용
  text: string; // 버튼 글자 크기
  width: string; // 버튼 가로 길이
  height: string; // 버튼 높이
  bg: string; // 버튼 배경색
  color: string; // 버튼 글자색
  border: string; // 버튼 border
  onClick: React.MouseEventHandler<HTMLButtonElement>; // 클릭 이벤트
}

const ButtonTs: React.FC<Props> = ({
  children,
  text,
  width,
  height,
  bg,
  color,
  onClick,
  border,
}) => {
  const styles = {
    width,
    height,
  };

  return (
    <>
      <button
        type='button'
        style={styles}
        className={`m-4 bg-${bg} rounded-[10px] text-${color} font-pretendard ${text} shadow-button font-semibold ${border} `}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonTs;
