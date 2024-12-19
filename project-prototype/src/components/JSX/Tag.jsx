import PropTypes from 'prop-types';

Tag.propTypes = {
  children: PropTypes.string,
  tagName: PropTypes.string, // 불러올 이미지 파일명
};

function Tag({children, tagName}) {
  return (
    <div className='flex items-center gap-[10px] ml-2'>
      <img className='size-9' src={`src/public/tagImg/${tagName}.svg`} />{' '}
      {children}
    </div>
  );
}

export default Tag;
