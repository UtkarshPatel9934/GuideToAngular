import { Content } from './content';

export class List {
  private _contentList: Content[];

  constructor() {
    this._contentList = [];
  }

  get returnContent() {
    return this._contentList;
  }

  addContent(inputContent: Content) {
    this._contentList.push(inputContent);
  }

  returnLengthOfContent() {
    return this.returnContent.length;
  }

  printContent(inputNumber: number): string {
    for (var i = 0; i < this.returnLengthOfContent(); i++) {
      if (this._contentList[i].id === inputNumber) {
        {
          return `
				hello
				<div>
					<div>${this._contentList[inputNumber].id}</div>
					<div>${this._contentList[inputNumber].title}</div>
					<div>${this._contentList[inputNumber].body}</div>
					<div>${this._contentList[inputNumber].author}</div>
					<img src="${this._contentList[inputNumber].imageLink}"></img>
					<div>${this._contentList[inputNumber].type}</div>
					<div>${this._contentList[inputNumber].hashtags}</div>
				</div>
				`;
        }
}
}
return "Nothing"
  }
}
