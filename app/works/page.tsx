import { WorkGridItem } from "@/components/GridItem";
import { collaborations, oldWorks, works } from "@/constants";
import { Work } from "@/types";

function WorkSection({ items }: { items: Work[] }) {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 space-y-6">
      {items.map(item => (
        <WorkGridItem
          key={item.link}
          work={item}
        />
      ))}
    </section>
  )
}

export default function Works() {
  return (
    <main title="Works" className="mb-6">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="work-title">Works</h2>
        <WorkSection items={works} />

        <hr className="my-8 border-border" />

        <h2 className="work-title">Collaborations</h2>
        <WorkSection items={collaborations} />

        <hr className="my-8 border-border" />

        <h2 className="work-title">Old works</h2>
        <WorkSection items={oldWorks} />
      </div>
    </main>
  );
}
