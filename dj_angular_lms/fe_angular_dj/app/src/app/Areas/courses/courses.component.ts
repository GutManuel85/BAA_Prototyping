import {Component} from '@angular/core';
import {CourseService} from "../../Services/course.service";
import {CategoryService} from "../../Services/category.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  allCategories: Array<any> = [];
  categories: Array<any> = [];
  allCourses: Array<any> = [];
  courses: Array<any> = [];
  mySearchString: string = '';


  constructor(private courseService: CourseService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
        this.courses = courses;
        this.allCourses = courses;
        console.log(this.courses);
      }
    )
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.allCategories = categories;
      console.log(this.categories)
    })
  }

  filteredCourses() {
    this.courses = this.allCourses;
    const searchTerm = this.mySearchString.toLowerCase();
    this.courses = this.courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm)
    );
  }

  filterCoursesWithCategory(categoryTitle: String) {
    this.courses = this.allCourses;
    if (categoryTitle != 'all categories') {
      this.courses = this.courses.filter(course => {
        return course.categories.some(category => category.title === categoryTitle);
      });
    } else {
      this.courses = this.allCourses;
    }
  }
}
