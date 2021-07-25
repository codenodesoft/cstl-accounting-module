/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { SoptorshiTestModule } from '../../../test.module';
import { TrainingInformationDeleteDialogComponent } from 'app/entities/training-information/training-information-delete-dialog.component';
import { TrainingInformationService } from 'app/entities/training-information/training-information.service';

describe('Component Tests', () => {
    describe('TrainingInformation Management Delete Component', () => {
        let comp: TrainingInformationDeleteDialogComponent;
        let fixture: ComponentFixture<TrainingInformationDeleteDialogComponent>;
        let service: TrainingInformationService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SoptorshiTestModule],
                declarations: [TrainingInformationDeleteDialogComponent]
            })
                .overrideTemplate(TrainingInformationDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(TrainingInformationDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TrainingInformationService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
