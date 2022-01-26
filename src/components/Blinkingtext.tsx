import React from 'react';
import { TypePhase, useTypedSuperpower } from '../states/useTypedSuperpower';
import cn from 'classnames';

type Props = {
  superpowers: string[];
};

const Blinkingtext = ({ superpowers }: Props) => {
  const { typedSuperpower, selectedSuperpower, phase } =
    useTypedSuperpower(superpowers);

  return (
    <div>
      <h1 className="font-semibold text-7xl space-x-4">MOrowo</h1>
      <p
        className={cn('text-deepblue text-3xl pb-2 min-h-[5rem]', {
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

export default Blinkingtext;
