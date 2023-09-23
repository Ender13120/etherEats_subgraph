import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  CustomerReputationIncreased,
  DelivererReputationDecreased,
  DelivererReputationIncreased,
  OrderAccepted,
  OrderCancelled,
  OrderCompleted,
  OrderCreated,
  OwnershipTransferred,
  TokensSlashed
} from "../generated/EtherEats/EtherEats"

export function createCustomerReputationIncreasedEvent(
  customer: Address,
  amount: BigInt
): CustomerReputationIncreased {
  let customerReputationIncreasedEvent = changetype<
    CustomerReputationIncreased
  >(newMockEvent())

  customerReputationIncreasedEvent.parameters = new Array()

  customerReputationIncreasedEvent.parameters.push(
    new ethereum.EventParam("customer", ethereum.Value.fromAddress(customer))
  )
  customerReputationIncreasedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return customerReputationIncreasedEvent
}

export function createDelivererReputationDecreasedEvent(
  deliverer: Address,
  amount: BigInt
): DelivererReputationDecreased {
  let delivererReputationDecreasedEvent = changetype<
    DelivererReputationDecreased
  >(newMockEvent())

  delivererReputationDecreasedEvent.parameters = new Array()

  delivererReputationDecreasedEvent.parameters.push(
    new ethereum.EventParam("deliverer", ethereum.Value.fromAddress(deliverer))
  )
  delivererReputationDecreasedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return delivererReputationDecreasedEvent
}

export function createDelivererReputationIncreasedEvent(
  deliverer: Address,
  amount: BigInt
): DelivererReputationIncreased {
  let delivererReputationIncreasedEvent = changetype<
    DelivererReputationIncreased
  >(newMockEvent())

  delivererReputationIncreasedEvent.parameters = new Array()

  delivererReputationIncreasedEvent.parameters.push(
    new ethereum.EventParam("deliverer", ethereum.Value.fromAddress(deliverer))
  )
  delivererReputationIncreasedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return delivererReputationIncreasedEvent
}

export function createOrderAcceptedEvent(
  orderId: BigInt,
  deliverer: Address
): OrderAccepted {
  let orderAcceptedEvent = changetype<OrderAccepted>(newMockEvent())

  orderAcceptedEvent.parameters = new Array()

  orderAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderAcceptedEvent.parameters.push(
    new ethereum.EventParam("deliverer", ethereum.Value.fromAddress(deliverer))
  )

  return orderAcceptedEvent
}

export function createOrderCancelledEvent(
  orderId: BigInt,
  by: Address
): OrderCancelled {
  let orderCancelledEvent = changetype<OrderCancelled>(newMockEvent())

  orderCancelledEvent.parameters = new Array()

  orderCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderCancelledEvent.parameters.push(
    new ethereum.EventParam("by", ethereum.Value.fromAddress(by))
  )

  return orderCancelledEvent
}

export function createOrderCompletedEvent(orderId: BigInt): OrderCompleted {
  let orderCompletedEvent = changetype<OrderCompleted>(newMockEvent())

  orderCompletedEvent.parameters = new Array()

  orderCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )

  return orderCompletedEvent
}

export function createOrderCreatedEvent(
  orderId: BigInt,
  customer: Address,
  encryptedParams: Bytes
): OrderCreated {
  let orderCreatedEvent = changetype<OrderCreated>(newMockEvent())

  orderCreatedEvent.parameters = new Array()

  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("customer", ethereum.Value.fromAddress(customer))
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "encryptedParams",
      ethereum.Value.fromBytes(encryptedParams)
    )
  )

  return orderCreatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTokensSlashedEvent(
  deliverer: Address,
  amount: BigInt
): TokensSlashed {
  let tokensSlashedEvent = changetype<TokensSlashed>(newMockEvent())

  tokensSlashedEvent.parameters = new Array()

  tokensSlashedEvent.parameters.push(
    new ethereum.EventParam("deliverer", ethereum.Value.fromAddress(deliverer))
  )
  tokensSlashedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokensSlashedEvent
}
