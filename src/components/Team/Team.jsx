import TeamHeader from '../Service/ServiceHeader';
import TeamCards from './TeamCards';

function Team() {
  const cardDes = 'Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop';
  return (
    <>
      <div className="py-10">
        <TeamHeader title="Our Team" description={cardDes} />
        <TeamCards />
      </div>
    </>
  );
}

export default Team;
