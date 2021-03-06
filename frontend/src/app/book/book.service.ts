import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()

export class BookService {

  constructor (private http: HttpClient){}

  public getBooks(): Observable<any> {
    return this.http.get("http://localhost:8080/books/all")
      .map((response) => response)
  }
}
