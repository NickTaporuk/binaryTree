import LinkedList from "./LinkedList.service";

it("LinkedList add 3 elements", function() {
  const ll = new LinkedList();

  ll.add(1).add(2).add(4).add(4);

  expect(ll.size()).toBe(4);
});

it("LinkedList remove element", function() {
  let ll = new LinkedList();

  ll.add(1).add(2).add(4).add(4).add(5).add(3).remove(2).remove(2).remove(2).remove(4).remove(5);
  console.log("TEST REMOVE LOG:==>", ll.toString());

  expect(ll.size()).toBe(3);
});
