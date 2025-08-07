import { renderHook, act } from "@testing-library/react";
import useCounter from "../src/hooks/features/homepage/useCounter";
describe("useCounter", () => {
  it("should update val and increment by new val", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
});
