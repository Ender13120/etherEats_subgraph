import {
  CustomerReputationIncreased as CustomerReputationIncreasedEvent,
  DelivererReputationDecreased as DelivererReputationDecreasedEvent,
  DelivererReputationIncreased as DelivererReputationIncreasedEvent,
  OrderAccepted as OrderAcceptedEvent,
  OrderCancelled as OrderCancelledEvent,
  OrderCompleted as OrderCompletedEvent,
  OrderCreated as OrderCreatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TokensSlashed as TokensSlashedEvent
} from "../generated/EtherEats/EtherEats"
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
} from "../generated/schema"

export function handleCustomerReputationIncreased(
  event: CustomerReputationIncreasedEvent
): void {
  let entity = new CustomerReputationIncreased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.customer = event.params.customer
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDelivererReputationDecreased(
  event: DelivererReputationDecreasedEvent
): void {
  let entity = new DelivererReputationDecreased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.deliverer = event.params.deliverer
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDelivererReputationIncreased(
  event: DelivererReputationIncreasedEvent
): void {
  let entity = new DelivererReputationIncreased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.deliverer = event.params.deliverer
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderAccepted(event: OrderAcceptedEvent): void {
  let entity = new OrderAccepted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.deliverer = event.params.deliverer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderCancelled(event: OrderCancelledEvent): void {
  let entity = new OrderCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.by = event.params.by

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderCompleted(event: OrderCompletedEvent): void {
  let entity = new OrderCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderCreated(event: OrderCreatedEvent): void {
  let entity = new OrderCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.customer = event.params.customer
  entity.encryptedParams = event.params.encryptedParams

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensSlashed(event: TokensSlashedEvent): void {
  let entity = new TokensSlashed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.deliverer = event.params.deliverer
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
