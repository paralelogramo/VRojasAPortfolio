import { Component, ElementRef, ViewChild } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent {

  @ViewChild('skillList') skillsContainer: ElementRef;

  skillText: string = '';

  skillTexts: any = {
    'Angular': 'I have specialized in Angular. Most of the projects I have worked on have been with this framework and it is without a doubt my favorite framework ❤️',
    'React': "I only worked on one project with React and mmmhhh... But if the tech lead orders it, i'll work with it 😅",
    'Vue': 'I have participated in a few projects with Vue, it was not a big deal so I know the basics to work with it 😴',
    'HTML': 'Definitely knowing pure HTML is necessary to learn the rest so if I were asked to measure my knowledge of it from 1 to 10 I would say an 8 😉',
    'CSS': 'A page without style is like life without music, boring and unfunny and just like HTML you need to know pure CSS to get started and I think I know a lot of it 🙄',
    'Bootstrap': 'The first frontend framework I tried when I was in the university. For me the perfect complement to a simple project with any other JavaScript framework. I would be intermediate level 😌',
    'Sass': "The latest I have seen in styles I try to learn more every day as it is super powerful. This portfolio uses SASS! (that means I'm not an expert) 😶",
    'PrimeNG': 'PrimeNG is one of the last libraries I have been using. I know the basics of PrimeNG but I can work without problems in a project that incorporates it 😶‍🌫️',
    'None': 'Try to hover over a skill! 🙂'
  }
  
  constructor(
    private deviceService: DeviceDetectorService,
  ) {
    if (this.deviceService.isMobile()) {
      this.skillTexts['None'] = 'Slide and tap on a technology! 🙂';
    }
    this.skillText = this.skillTexts['None'];
  }

  ngOnInit() {
  }

  enterSkill(skill: string) {
    this.skillText = this.skillTexts[skill];
  }

  exitSkill() {
    this.skillText = this.skillTexts['None'];
  }
}
