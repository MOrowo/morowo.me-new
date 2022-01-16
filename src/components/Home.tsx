import React from 'react';
import { TypePhase, useTypedSuperpower } from '../states/useTypedSuperpower';
import cn from 'classnames';

type Props = {
  superpowers: string[];
};

const Homepage = ({ superpowers }: Props) => {
  const { typedSuperpower, selectedSuperpower, phase } =
    useTypedSuperpower(superpowers);

  return (
    <div>
      <h1 className="font-semibold text-5xl space-x-4">MOrowo</h1>
      <p
        className={cn('text-deepblue pb-2 min-h-[5rem]', {
          ['end-cursor']: phase !== TypePhase.Deleting,
          ['blinking']: phase === TypePhase.Pausing,
        })}
        aria-label={selectedSuperpower}
      >
        {typedSuperpower}
      </p>
    </div>
  );
};

export default Homepage;
