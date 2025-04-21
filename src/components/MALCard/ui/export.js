// index.js
import MALCard from './Card/index';
import CardHeader from './CardHeader/index';
import CardMain from './CardMain/index';
import CardDescription from './CardDescription/index';
import CardProfile from './CardProfile/index';
import ParticipantMeter from './ParticipantMeter/index';
import CardFooter from './CardFooter/index';
import DetailsButton from './DetailsButton/index';
import ApplyButton from './ApplyButton/index';

// Export the main Card component with all subcomponents attached
export default MALCard;

// Also export each component individually for more flexibility
export {
    CardHeader,
    CardMain,
    CardDescription,
    CardProfile,
    ParticipantMeter,
    CardFooter,
    DetailsButton,
    ApplyButton,
};