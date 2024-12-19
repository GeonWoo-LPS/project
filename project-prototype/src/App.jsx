import Button from '@components/JSX/Button';
import Select from '@components/JSX/Select';
import Tag from '@components/JSX/Tag';
import SelectTs from './components/TSX/SelectTs';
import ButtonTs from './components/TSX/ButtonTs';
import TagTs from './components/TSX/TagTs';

function Click() {
  console.log('클릭');
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  });
}

function App() {
  return (
    <>
      <Button
        width='311px'
        height='41px'
        bg='broccoli'
        color='white'
        text='text-sm'
        onClick={Click}
      >
        버튼
      </Button>
      <ButtonTs
        width='343px'
        height='41px'
        bg='white'
        color='broccoli'
        text='text-sm'
        onClick={Click}
      >
        회원가입
      </ButtonTs>
      <Button width='272px' height='52px' bg='white' text='text-sm'>
        시작하기
      </Button>
      <Button
        width='53px'
        height='22px'
        bg='broccoli'
        color='white'
        text='text-[10px]'
      >
        중복체크
      </Button>
      <Button
        width='315px'
        height='52px'
        bg='broccoli'
        color='white'
        text='text-sm'
      >
        <div className='flex items-center'>
          <img className='mx-[9px]' src='src/public/buttonImg/people.svg' />
          거래 신청자 확인하기
          <img
            className='mr-[19px] ml-[121px]'
            src='src/public/buttonImg/arrow1.svg'
          />
        </div>
      </Button>
      <Button
        width='195px'
        height='46px'
        border='border border-inactive border-[1px]'
        color='inactive'
        text='text-sm'
      >
        비활성
      </Button>
      <br />
      <div>
        <Tag tagName='tag'>3,000원</Tag>
        <Tag tagName='location'>공릉 2동</Tag>
        <TagTs tagName='item'>2/10</TagTs>
        <TagTs tagName='time'>10:00</TagTs>
      </div>
      <br />
      <Select />
      <br />
      <SelectTs />
    </>
  );
}

export default App;
