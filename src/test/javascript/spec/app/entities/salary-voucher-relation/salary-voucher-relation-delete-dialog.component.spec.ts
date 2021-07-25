/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { SoptorshiTestModule } from '../../../test.module';
import { SalaryVoucherRelationDeleteDialogComponent } from 'app/entities/salary-voucher-relation/salary-voucher-relation-delete-dialog.component';
import { SalaryVoucherRelationService } from 'app/entities/salary-voucher-relation/salary-voucher-relation.service';

describe('Component Tests', () => {
    describe('SalaryVoucherRelation Management Delete Component', () => {
        let comp: SalaryVoucherRelationDeleteDialogComponent;
        let fixture: ComponentFixture<SalaryVoucherRelationDeleteDialogComponent>;
        let service: SalaryVoucherRelationService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SoptorshiTestModule],
                declarations: [SalaryVoucherRelationDeleteDialogComponent]
            })
                .overrideTemplate(SalaryVoucherRelationDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(SalaryVoucherRelationDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SalaryVoucherRelationService);
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
