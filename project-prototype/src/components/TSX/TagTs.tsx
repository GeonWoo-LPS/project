interface Props {
  children: React.ReactNode;
  tagName: string;
}

const TagTs: React.FC<Props> = ({children, tagName}) => {
  return (
    <div className='flex items-center gap-[10px] ml-2'>
      <img className='size-9' src={`src/public/tagImg/${tagName}.svg`} />{' '}
      {children}
    </div>
  );
};

export default TagTs;
