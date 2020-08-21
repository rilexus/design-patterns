

interface ListElementVisitor<ListElementValueType> {
  visit(element: ListElement<ListElementValueType>): void
}

interface ListElementInterface<ValueType> {
  getValue():ValueType;
  getNext(): ListElementInterface<ValueType> | null;
  setNext(element: ListElementInterface<ValueType>):void;
  hasNext(): boolean;
  setValue(to: ValueType): void;
  accept(visitor: ListElementVisitor<ValueType>): void
}

class ListElement<DataType> implements ListElementInterface<DataType>{
  private next: ListElementInterface<DataType> = null;
  private value: DataType;

  constructor(value: DataType, next: ListElement<DataType> | null){
    this.value = value;
    this.next = next
  }

  getNext(): ListElementInterface<DataType> | null {
    return this.next;
  }

  setNext(element: ListElementInterface<DataType>): void {
    this.next = element;
  }

  hasNext(){
    return !!this.next;
  }

  setValue(to: DataType): void {
    this.value = to;
  }

  getValue(): DataType {
    return this.value;
  }

  accept(visitor: ListElementVisitor<DataType>): void {
    visitor.visit(this);
  }
}

export class Incrementor implements ListElementVisitor<any>{
  visit(element: ListElement<any>): void {
    element.setValue(element.getValue() + 1);
  }
}
export class Decrementor implements ListElementVisitor<any>{
  visit(element: ListElement<any>): void {
    element.setValue(element.getValue() - 1);
  }
}

export class List<DataType> {
  head: ListElementInterface<DataType>;

  private append(element: ListElement<DataType>){
    // append element at the end
    if (!this.head.hasNext()){
      this.head.setNext(element);
      return;
    }

    let elem = this.head;
    while (elem.hasNext()){
      elem = elem.getNext();
    }

    elem.setNext(element);
  }

  add(value: DataType){
    if (!this.head){
      this.head = new ListElement<DataType>(value, null);
    } else {
      this.append(new ListElement<DataType>(value, null));
    }
  }

  visit(visitor: ListElementVisitor<DataType>){
    let elem: ListElementInterface<DataType> = this.head;
    elem.accept(visitor); // execute on head

    while(elem.hasNext()){
      elem = elem.getNext();
      elem.accept(visitor); // execute on the rest of the elements
    }
  }
}
