import TimelineItem from './TimelineItem'
import timelineData from '../../utils/timeline.json'
import './Timeline.css'


const Timeline = () =>
    timelineData.length > 0 && (
        <div className="innerWidth timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

export default Timeline
