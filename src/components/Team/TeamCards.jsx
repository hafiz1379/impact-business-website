/*eslint-disable*/
import TeamCard from "./TeamCard";

const info = [
  {
    name: "Walter White",
    position: "Web development",
    Image: "/images/team/team-1.jpg",
  },
  {
    name: "Walter Green",
    position: "Marketing",
    Image: "/images/team/team-2.jpg",
  },
  {
    name: "Walter Black",
    position: "Accounting",
    Image: "/images/team/team-3.jpg",
  },
  {
    name: "Walter Purple",
    position: "Full-stack developer",
    Image: "/images/team/team-4.jpg",
  },
];

function TeamCards() {
  return (
    <>
      <div className="w-full px-8 mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:px-16 xl:grid-cols-4 gap-6">
        {info.map((item, index) => (
          <TeamCard
            key={index}
            name={item.name}
            position={item.position}
            image={item.Image}
          />
        ))}
      </div>
    </>
  );
}

export default TeamCards;
