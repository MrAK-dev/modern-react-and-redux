import { GoBell, GoCloudOffline, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {
    console.log('Click!');
  };

  return (
    <div>
      <div>
        <Button
          className="mb-2"
          secondary
          outline
          rounded
          onClick={handleClick}
        >
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudOffline />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
