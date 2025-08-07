import { renderHook, act } from "@testing-library/react";
import useCounter from "../src/hooks/features/homepage/useCounter";

describe("useCounter", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it("should increment count by val when increment is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it("should update val and increment by new val", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(5);
    });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(5);
    expect(result.current.val).toBe(5);
  });

  it("should increment multiple times correctly", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.increment();
    });

    expect(result.current.count).toBe(3);
  });

  it("should handle negative values", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(-3);
    });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(-3);
    expect(result.current.val).toBe(-3);
  });

  it("should handle zero value", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(0);
    });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(0);
  });

  it("should handle decimal values", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(2.5);
    });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(2.5);
    expect(result.current.val).toBe(2.5);
  });

  it("should maintain state between renders", () => {
    const { result, rerender } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);

    rerender();

    expect(result.current.count).toBe(1);
    expect(result.current.val).toBe(1);
  });

  it("should update val multiple times correctly", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(10);
    });

    act(() => {
      result.current.setVal(20);
    });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(20);
    expect(result.current.val).toBe(20);
  });
});
