import { assertEquals } from "https://deno.land/std@0.204.0/assert/assert_equals.ts";
import { add } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});
