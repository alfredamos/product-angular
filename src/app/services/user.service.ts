import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserDto } from 'src/models/auth/user.model';
import { UserApiResults } from 'src/models/users/user-results.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly url = 'http://localhost:3000/api/users';
  private usersSubject = new BehaviorSubject<UserDto[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {
    const users = JSON.parse(this.getUsersFromStorage()) as UserDto[];

    if (users) {
      this.updateUsers$(users);
    }
  }

  createUser(userDto: UserDto): Observable<UserApiResults> {
    return this.http.post<UserApiResults>(`${this.url}`, userDto);
  }

  deleteUser(id: string): Observable<UserApiResults> {
    return this.http.delete<UserApiResults>(`${this.url}/${id}`);
  }

  editUser(userDto: UserDto) {
    return this.http.patch<UserApiResults>(`${this.url}/${userDto.id}`, userDto);
  }

  getAllUser() {
    return this.http.get<UserApiResults>(`${this.url}`).pipe(
      tap(({ users }) => {
        this.updateUsers$(users!);
        this.setUsersInStorage(users!);
      })
    );
  }

  getUserById(id: string) {
    return this.http.get<UserApiResults>(`${this.url}/${id}`);
  }

  updateUsers$(value: UserDto[]) {
    this.usersSubject.next(value);
  }

  getUsersValue(): UserDto[] {
    return this.usersSubject.getValue();
  }

  setUsersInStorage(value: UserDto[]) {
    localStorage.setItem('users', JSON.stringify(value));
  }

  getUsersFromStorage(): string {
    return localStorage.getItem('users')!;
  }
}
