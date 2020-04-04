import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  static readonly ownerPath: String = "../owner";
  static readonly editorPath: String = "../platformeditor";

  // owner: boolean = true;
  static staticOwnerMode: boolean = true;
  static staticSwitchBtnTxt: String = "Switch to Editor Mode";
  static staticCurrentPath: String;

  constructor() {}

  get ownerMode() {
    return HeaderComponent.staticOwnerMode;
  }

  get switchBtnTxt() {
    return HeaderComponent.staticSwitchBtnTxt;
  }

  public getBtnTxt(): String {
    return this.switchBtnTxt;
  }

  get currentPath() {
    return HeaderComponent.staticCurrentPath;
  }

  changeMode() {
    if (HeaderComponent.staticOwnerMode) {
      HeaderComponent.toEditor();
    } else {
      HeaderComponent.toOwner();
    }
  }

  public static toEditor() {
    HeaderComponent.staticOwnerMode = false;
    HeaderComponent.staticSwitchBtnTxt = "Switch to Owner Mode";
    HeaderComponent.staticCurrentPath = HeaderComponent.ownerPath;
  }

  public static toOwner() {
    HeaderComponent.staticOwnerMode = true;
    HeaderComponent.staticSwitchBtnTxt = "Switch to Editor Mode";
    HeaderComponent.staticCurrentPath = HeaderComponent.editorPath;
  }
  ngOnInit() {}
}
