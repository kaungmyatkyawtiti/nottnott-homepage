import { WorkGridItem } from "@/components/GridItem";
import { collaborations, oldWorks, works } from "@/constants";
import { Work } from "@/types";

export default function Works() {
  const renderGrid = (items: Work[]) => (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 space-y-6">
      {items.map((item) => (
        <WorkGridItem
          key={item.id}
          id={item.id}
          title={item.title}
          thumbnail={item.thumbnail}
        >
          {item.description}
        </WorkGridItem>
      ))}
    </div>
  );

  return (
    <div title="Works" className="mb-6">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="work-title">Works</h2>
        {renderGrid(works)}

        <hr className="my-8 border-border" />

        <h2 className="work-title">Collaborations</h2>
        {renderGrid(collaborations)}

        <hr className="my-8 border-border" />

        <h2 className="work-title">Old works</h2>
        {renderGrid(oldWorks)}
      </div>
    </div>
  );
}
