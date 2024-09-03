'use client';

import React from 'react';
import Image from 'next/image';
import { Icons } from '@/common/assets';
import useSubscriptions from './use-subscriptions.hook';
import { CustomModal } from '@/common/components/custom-modal/custom-modal';
import { CustomTabs } from '@/common/components/custom-tabs/custom-tabs.component';
import { CustomButton } from '@/common/components/custom-button/custom-button.component';
import { CustomLoader } from '@/common/components/custom-loader/custom-loader.component';

export default function Subscriptions() {
  const {
    open,
    plans,
    router,
    planObj,
    loading,
    setOpen,
    activeTab,
    setPlanObj,
    setActiveTab,
    subscriptionTabs,
    handlePlanStatus
  } = useSubscriptions();

  return (
    <div className="p-4 mt-6 rounded-xl bg-white">
      <CustomModal
        isOpen={open}
        cancelBtnText="No"
        actionBtnText="Yes"
        onClose={() => setOpen(!open)}
        className="w-full max-w-[486px]"
        onSubmit={() => handlePlanStatus()}
      >
        <div className="flex flex-col items-center gap-6">
          <Image src={Icons.alertTriangle} alt="alert-triangle" />
          <p className="text-xl text-gray700 font-semibold">
            Are You Sure You Want to{' '}
            {planObj?.status ? 'Deactivate' : 'Activate'} this Plan
          </p>
        </div>
      </CustomModal>
      <h3 className="text-xl text-[#211C37] font-semibold">Subscription</h3>
      <div className="flex-center mb-6">
        <CustomTabs
          activeTab={activeTab}
          tabs={subscriptionTabs}
          setActiveTab={setActiveTab}
        />
      </div>
      <h2 className="text-3xl text-gray700 text-center font-semibold mb-8">
        Your {activeTab === 'monthly' ? 'Monthly' : 'Yearly'} Subscription Plans
      </h2>
      <div
        style={{ alignItems: 'normal' }}
        className="flex-center flex-wrap gap-6 mb-10"
      >
        {loading ? (
          <CustomLoader circleColor="#697586" />
        ) : (
          plans?.map((plan) => (
            <div
              key={plan._id}
              className={`p-6 w-full bg-[#FCFCFD] rounded-[10px] border border-solid border-gray200 max-w-[521px] ${
                !plan.status ? 'opacity-50' : ''
              }`}
            >
              <div className="flex-between border-b-gray300 border-b border-solid">
                <div className="px-3.5 pb-8 flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-gray700">
                    {plan.name}
                  </h3>
                  <div className="text-gray700">
                    <span className="text-5xl font-bold">
                      ${plan.price.split('.')[0]}.
                    </span>
                    <span className="text-3xl font-bold">
                      {plan.price.split('.')[1]}/
                    </span>
                    <span className="text-xl font-normal">
                      {plan.duration_unit}
                    </span>
                  </div>
                </div>
                <div
                  className={`gap-1 h-[30px] inline-flex items-center rounded-full transition-colors duration-500 ${
                    plan.status
                      ? 'bg-blue600'
                      : 'bg-gray100 flex-row-reverse border border-solid border-gray400'
                  }`}
                >
                  <span
                    className={`text-xs font-semibold ${
                      plan.status ? 'text-white pl-1.5' : 'text-gray600 pr-1.5'
                    }`}
                  >
                    {plan.status ? 'Active' : 'Inactive'}
                  </span>
                  <span
                    onClick={() => {
                      setOpen(!open);
                      setPlanObj({ id: plan._id, status: plan.status });
                    }}
                    className={`w-[22px] h-[22px] cursor-pointer rounded-full ${
                      plan.status ? 'bg-white mr-1' : 'bg-gray500 ml-1'
                    }`}
                  ></span>
                </div>
              </div>
              <div className="flex flex-col justify-between h-[calc(100%_-_130px)]">
                <div>
                  <ul className="space-y-2 py-6">
                    {plan?.features?.map((feature) => (
                      <li
                        key={feature._id}
                        className="flex items-center font-medium text-[#3F486A] pb-7"
                      >
                        <span className="w-5 h-5 flex-center bg-blue600 text-white rounded-[50%] mr-2">
                          <Image
                            width={10}
                            height={10}
                            alt="white-check"
                            src={Icons.whiteCheck}
                          />
                        </span>{' '}
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <CustomButton
                    text="Edit Plan"
                    disabled={!plan.status}
                    className="btn-primary w-full"
                    onClick={() =>
                      router.push(`/subscriptions/edit/${plan._id}`)
                    }
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
