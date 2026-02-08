"use client";

import { WORK_TABS, WORKS } from "@/constants";
import cn from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { WorkGridItem } from "./GridItem";
import { SubTitle } from "./ui/text";

export default function WorkSection() {
  const [selectedTab, setSelectedTab] = useState("all")
  const countByTypes = WORKS.reduce((acc: Record<string, number>, work) => {
    acc[work.type] = (acc[work.type] ?? 0) + 1;
    return acc;
  },
    {} as Record<string, number>
  );
  console.log("countByTypes", countByTypes)

  const totalCount = WORKS.length;

  const worksByType = WORKS.reduce(
    (acc: Record<string, typeof WORKS>, work) => {
      if (!acc[work.type]) {
        acc[work.type] = [];
      }
      acc[work.type].push(work);
      return acc;
    },
    {} as Record<string, typeof WORKS>
  );
  console.log("worksByType", worksByType)

  const filteredWorks = WORKS.filter(work => selectedTab === "all" || selectedTab === work.type);

  return (
    <div>
      <ul className="sticky top-(--header-height) z-90 flex border-b overflow-x-auto whitespace-nowrap bg-background/90 backdrop-blur-lg">
        {WORK_TABS.map((item, i) => (
          <motion.li
            key={i}
            initial={false}
            animate={{
              backgroundColor: item === selectedTab ? "var(--brand-foreground-glass)" : "rgba(0,0,0,0)"
            }}
            onClick={() => setSelectedTab(item)}
            className={cn(
              'px-4.5 py-2.5 relative cursor-pointer text-foreground/85 hover:text-foreground text-[15px] capitalize',
              item === selectedTab && "text-foreground"
            )}
          >
            {item} [{item === "all" ? totalCount : countByTypes[item] ?? 0}]
            {item === selectedTab && (
              <motion.div
                layoutId="underline"
                id="underline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-brand-foreground"
              />
            )}
          </motion.li>
        ))}
      </ul>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab ? selectedTab : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-14 mt-6"
        >
          {selectedTab === "all"
            ? Object.entries(worksByType).map(([type, works]) => (
              <div key={type}>
                <SubTitle>{type}</SubTitle>
                <div className="grid grid-cols-1 gap-y-8 gap-x-6 md:grid-cols-2">
                  {works.map(item => (
                    <WorkGridItem
                      key={item.link}
                      work={item}
                    />
                  ))}
                </div>
                <hr className="my-8 border-border" />
              </div>
            )) : (
              <div>
                <SubTitle>{selectedTab}</SubTitle>
                <div className="grid grid-cols-1 gap-y-8 gap-x-6 md:grid-cols-2">
                  {filteredWorks.map(item => (
                    <WorkGridItem
                      key={`${item.link} - ${item.thumbnail}`}
                      work={item}
                    />
                  ))}
                </div>
                <hr className="my-8 border-border" />
              </div>
            )
          }
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
