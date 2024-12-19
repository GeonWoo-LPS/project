import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.any, // 버튼 내용
  text: PropTypes.string, // 버튼 글자 크기
  width: PropTypes.string, // 버튼 가로 길이
  height: PropTypes.string, // 버튼 높이
  bg: PropTypes.string, // 버튼 배경색
  color: PropTypes.string, // 버튼 글자색
  border: PropTypes.string, // 버튼 border
  onClick: PropTypes.func, // 클릭 이벤트
};

function Button({children, text, width, height, bg, color, onClick, border}) {
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
}

export default Button;
