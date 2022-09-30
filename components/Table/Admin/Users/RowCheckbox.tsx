import { useRef, useEffect, forwardRef } from "react";
import Checkbox from "../../../Input/Checkbox";
import { StyledLabel } from "../../../Input/style";

interface Props {
  indeterminate?: boolean;
  name: string;
}

const useCombinedRefs = (...refs): React.MutableRefObject<any> => {
  const targetRef = useRef();

  useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

const IndeterminateCheckbox = forwardRef<HTMLInputElement, Props>(
  ({ indeterminate, ...rest }, ref: React.Ref<HTMLInputElement>) => {
    const defaultRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, defaultRef);

    useEffect(() => {
      if (combinedRef?.current) {
        combinedRef.current.indeterminate = indeterminate ?? false;
      }
    }, [combinedRef, indeterminate]);

    return (
      <StyledLabel Display="inline-flex" width="25px">
        <Checkbox refs={combinedRef} {...rest} />
      </StyledLabel>
    );
  }
);

IndeterminateCheckbox.displayName = "IndeterminateCheckbox";

export default IndeterminateCheckbox