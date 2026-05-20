'use client';

import { useState } from 'react';
import clsx from 'clsx';
import type { AccordionProps } from './Accordion.types';
import styles from './Accordion.module.scss';

const PlusIcon = ({ open }: { open: boolean }) => (
  <span className={clsx(styles.icon, open && styles.iconOpen)} aria-hidden>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <line x1="8" y1="1" x2="8" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </span>
);

const Accordion = ({ categories }: AccordionProps) => {
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleCategory = (index: number) => {
    setOpenCategory(prev => prev === index ? null : index);
    setOpenItem(null);
  };

  const toggleItem = (key: string) => {
    setOpenItem(prev => prev === key ? null : key);
  };

  return (
    <div className={styles.root}>
      {categories.map((category, catIdx) => {
        const isCatOpen = openCategory === catIdx;

        return (
          <div key={category.name} className={clsx(styles.category, isCatOpen && styles.categoryOpen)}>
            <button
              className={styles.categoryHeader}
              onClick={() => toggleCategory(catIdx)}
              aria-expanded={isCatOpen}
            >
              <span className={styles.categoryName}>{category.name}</span>
              <PlusIcon open={isCatOpen} />
            </button>

            <div className={clsx(styles.categoryBody, isCatOpen && styles.categoryBodyOpen)}>
              <div className={styles.categoryBodyInner}>
                {category.items.map((item, itemIdx) => {
                  const itemKey = `${catIdx}-${itemIdx}`;
                  const isItemOpen = openItem === itemKey;

                  return (
                    <div key={itemKey} className={clsx(styles.item, isItemOpen && styles.itemOpen)}>
                      <button
                        className={styles.itemHeader}
                        onClick={() => toggleItem(itemKey)}
                        aria-expanded={isItemOpen}
                      >
                        <span className={styles.itemQuestion}>{item.question}</span>
                        <PlusIcon open={isItemOpen} />
                      </button>

                      <div className={clsx(styles.itemBody, isItemOpen && styles.itemBodyOpen)}>
                        <div className={styles.itemBodyInner}>
                          <p className={styles.itemAnswer}>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
